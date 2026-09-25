\# JS Web \& Negócios — Arquitetura WaaS



\## OBJETIVO



Este projeto utiliza uma arquitetura de WaaS

(Website as a Service) desenvolvida pela JS Web \& Negócios.



A plataforma permite controlar centralmente:



\- clientes;

\- identificação das instalações;

\- pagamentos;

\- status de acesso;

\- ativação;

\- suspensão;

\- manutenção;

\- licenciamento dos sites.



O site deste projeto também funciona como ambiente real

de teste dessa arquitetura.



\---



\## FIREBASE / FIRESTORE



O sistema utiliza Firebase/Firestore como parte da

infraestrutura de controle do licenciamento.



A aplicação consulta o Firestore para verificar o estado

de licenciamento e acesso do cliente.



O polling periódico existente é INTENCIONAL.



Não deve ser removido ou considerado código desnecessário

apenas por realizar consultas periódicas.



\---



\## REGRA DE PRESERVAÇÃO



A lógica de licenciamento é uma funcionalidade comercial

central da JS Web \& Negócios.



Antes de alterar qualquer código relacionado ao sistema:



1\. identificar a finalidade da alteração;

2\. entender o fluxo atual;

3\. verificar como o cliente é identificado;

4\. verificar como o status é obtido;

5\. verificar o comportamento em caso de indisponibilidade;

6\. verificar o comportamento de suspensão;

7\. verificar o comportamento de ativação;

8\. verificar o comportamento de manutenção;

9\. avaliar impacto em produção.



Nenhuma alteração estrutural deve ser feita sem autorização

explícita do proprietário.



\---



\## COMPORTAMENTO ESPERADO



O sistema deve permitir que a JS Web \& Negócios possa,

de forma centralizada, controlar o acesso aos sites

licenciados.



Exemplo conceitual:



Cliente

&#x20;  ↓

Site contratado

&#x20;  ↓

Identificação do cliente

&#x20;  ↓

Firestore

&#x20;  ↓

Status do contrato

&#x20;  ├── Ativo

&#x20;  ├── Suspenso

&#x20;  ├── Manutenção

&#x20;  └── Outro estado definido pela plataforma

&#x20;  ↓

Comportamento do site



\---



\## SEGURANÇA



Nunca expor:



\- credenciais administrativas;

\- chaves privadas;

\- tokens administrativos;

\- credenciais de acesso ao banco;

\- informações internas de outros clientes.



Credenciais públicas necessárias ao funcionamento do Firebase

podem existir no frontend quando compatíveis com o modelo de

segurança do Firebase, mas as regras de segurança do Firestore

devem ser tratadas como parte crítica da proteção do sistema.



\---



\## MULTI-TENANCY



A arquitetura poderá evoluir para atender múltiplos clientes.



Por isso, qualquer alteração no mecanismo de identificação

de cliente deve considerar isolamento entre clientes.



Um cliente nunca deve conseguir acessar ou modificar dados

pertencentes a outro cliente.



\---



\## FUTURA EVOLUÇÃO



Possíveis evoluções futuras incluem:



\- painel administrativo central;

\- cadastro de clientes;

\- controle de planos;

\- controle de pagamentos;

\- histórico de suspensão;

\- ativação automática;

\- alertas de vencimento;

\- métricas operacionais;

\- auditoria;

\- gerenciamento de múltiplos sites;

\- domínio personalizado por cliente.



Essas funcionalidades não devem ser implementadas

automaticamente.



Elas fazem parte do roadmap potencial do produto.

