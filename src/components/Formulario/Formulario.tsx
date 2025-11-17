import React from 'react';
import { styles } from './FormularioStyles';
import { InputText } from '../InputText/InputText';
import { Button } from '../Button/Button';
import { Image, View, Text, Alert } from 'react-native';
import { formatarPhoneBR } from '../../services/formatarPhone';
import { ModalEnviado } from '../ModalEnviado/ModalEnviado';

interface FormularioProps {
    onActiveBatSignal?: ()=>void;
}

export function Formulario(props: FormularioProps) {
  const [name, setName] = React.useState('');
  const [telefone, setTelefone] = React.useState('');
  const [localizacao, setLocalizacao] = React.useState('');
  const [obs, setObs] = React.useState('');
  const [modalVisivel, setModalVisivel] = React.useState(false);

  function handleEnviar() {
    if (!name || !telefone || !localizacao) {
      Alert.alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    setModalVisivel(true);
  }

  function handleFecharModal() {
    setModalVisivel(false);
    setName('');
    setTelefone('');
    setLocalizacao('');
    setObs('');

    if (props.onActiveBatSignal) {
      props.onActiveBatSignal();
    }
  }

  return (
    <>
      <View style={styles.logoContainer}>
        <Image 
          style={{resizeMode: 'contain', width: 130, height: 130}} 
          source={require('../../../assets/logoBat.png')} 
        />
      </View>

      <Text style={styles.labelFormulario}>Nome</Text>
      <View style={styles.formContainer}>
        <InputText
          placeholder='Informe seu Nome completo'
          value={name} 
          onChangeText={setName} 
        />
        
        <Text style={styles.labelFormulario}>Telefone:</Text>
        <InputText
          keyboardType='phone-pad'
          placeholder='Digite seu Telefone'
          value={telefone} 
          onChangeText={(value) => setTelefone(formatarPhoneBR(value).formatted)}  
        />

        <Text style={styles.labelFormulario}>Localização:</Text>
        <InputText
          style={{height: 80, textAlignVertical: 'top'}}
          placeholder='Informe sua Localização'
          value={localizacao} 
          onChangeText={(value) => setLocalizacao(value)} 
        />

        <Text style={styles.labelFormulario}>Observações:</Text>
        <InputText
          style={{height: 100, textAlignVertical: 'top'}}
          placeholder='Digite as Observações'
          value={obs} 
          onChangeText={setObs} 
        />

        <Button 
          handleAticteSinalButton={handleEnviar} 
          title="ENVIAR"
        />
          <Button 
          style={{backgroundColor: '#600606', marginTop: 10}}
          handleAticteSinalButton={handleFecharModal} 
          title="CANCELAR"
        />
      </View>

      <ModalEnviado
        visible={modalVisivel}
        dados={{
          nome: name,
          telefone: telefone,
          localizacao: localizacao,
          observacoes: obs,
        }}
        onFechar={handleFecharModal}
      />
    </>
  );
}