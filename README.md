# BatSinal 🦇

Um aplicativo React Native que simula um sistema de sinal de alerta tipo "Bat Signal", permitindo que usuários ativem um sinal e preencham um formulário com suas informações de contato e localização.

## 📋 Descrição

O BatSinal é um aplicativo mobile desenvolvido em React Native que oferece uma interface intuitiva para:
- Ativar um sinal de alerta visual
- Preencher formulário com dados do usuário (nome, telefone, localização e observações)
- Validar e formatar números telefônicos brasileiros
- Exibir confirmação de envio dos dados

## 🚀 Tecnologias

- **React Native** 0.82.1
- **TypeScript** 5.8.3
- **React** 19.1.1
- **Expo/Metro** para bundling
- **Jest** para testes
- **Kotlin** (Android nativo)
- **Swift** (iOS nativo)

## 📦 Funcionalidades Principais

- ✅ Tela inicial com botão "ACTIVE BAT SIGNAL"
- ✅ Formulário com validação de campos obrigatórios
- ✅ Formatação automática de número telefônico brasileiro
- ✅ Modal de confirmação com dados enviados
- ✅ Interface responsiva e intuitiva
- ✅ Suporte para iOS e Android

## 🛠️ Requisitos

- Node.js >= 20
- Ruby >= 2.6.10
- CocoaPods (para iOS)
- Android SDK (para Android)
- Xcode (para iOS) ou Android Studio (para Android)

## ⚙️ Instalação

1. Clone o repositório
```bash
git clone <seu-repositorio>
cd BatSinal
```

2. Instale as dependências
```bash
npm install
```

3. Instale as dependências nativas (iOS)
```bash
cd ios && pod install && cd ..
```

## 🏃 Como Executar

### iOS
```bash
npm run ios
```

### Android
```bash
npm run android
```

### Modo desenvolvimento
```bash
npm start
```

## 🧪 Testes

```bash
npm test
```

## 📂 Estrutura do Projeto

```
src/
  ├── components/        # Componentes reutilizáveis
  │   ├── Button/
  │   ├── InputText/
  │   ├── Formulario/
  │   └── ModalEnviado/
  ├── services/          # Funções utilitárias
  │   └── formatarPhone.ts
  └── screen/            # Telas principais
      └── Home/
```

## 🎨 Componentes Principais

- **Home**: Tela inicial com switch entre sinal ativo/inativo
- **Formulario**: Formulário de coleta de dados
- **ModalEnviado**: Modal de confirmação de envio
- **InputText**: Campo de entrada customizado
- **Button**: Botão reutilizável

## 📱 Funcionalidade de Formatação de Telefone

O aplicativo formata automaticamente números telefônicos brasileiros:
- Com 11 dígitos: `(XX) 9XXXX-XXXX`
- Com 10 dígitos: `(XX) XXXX-XXXX`

## 📝 Licença

Projeto pessoal - Todos os direitos reservados