import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';
import { styles } from './ModalEnviadoStyles';

interface ModalEnviadoProps {
  visible: boolean;
  dados: {
    nome: string;
    telefone: string;
    localizacao: string;
    observacoes: string;
  };
  onFechar: () => void;
}

export function ModalEnviado({ visible, dados, onFechar }: ModalEnviadoProps) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.titulo}>✓ Dados Enviados com Sucesso!</Text>
          
          <View style={styles.dadosContainer}>
            <View style={styles.linhaInfo}>
              <Text style={styles.label}>Nome:</Text>
              <Text style={styles.valor}>{dados.nome}</Text>
            </View>

            <View style={styles.linhaInfo}>
              <Text style={styles.label}>Telefone:</Text>
              <Text style={styles.valor}>{dados.telefone}</Text>
            </View>

            <View style={styles.linhaInfo}>
              <Text style={styles.label}>Localização:</Text>
              <Text style={styles.valor}>{dados.localizacao}</Text>
            </View>

            <View style={styles.linhaInfo}>
              <Text style={styles.label}>Observações:</Text>
              <Text style={styles.valor}>{dados.observacoes}</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.botaoFechar} onPress={onFechar}>
            <Text style={styles.textoBotao}>FECHAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}