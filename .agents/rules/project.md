\# JS Web \& Negócios — Site Portfólio



\## PROJETO



Este projeto é o site comercial oficial da JS Web \& Negócios.



Produção:

https://site-jhones-portifolio.vercel.app/



O objetivo do site é apresentar os serviços, projetos e soluções

digitais desenvolvidos pela JS Web \& Negócios e converter visitantes

em potenciais clientes.



\---



\## ARQUITETURA OFICIAL



A aplicação oficial utiliza:



\- Next.js

\- App Router

\- React

\- TypeScript

\- Tailwind CSS

\- Lucide React



A aplicação oficial está dentro de:



src/



Estrutura principal:



src/app/

src/components/

src/data/

src/types/

public/



\---



\## REGRA CRÍTICA — NEXT.JS É A APLICAÇÃO OFICIAL



Toda alteração visual ou funcional do site deve ser realizada

na aplicação Next.js dentro de src/.



Não modificar os arquivos legados da raiz para implementar

funcionalidades do site atual.



Arquivos/pastas legados:



\- index.html

\- css/

\- js/

\- imagens/



Esses arquivos não fazem parte da aplicação oficial atual.



Antes de alterar qualquer arquivo legado, explicar o motivo

e solicitar autorização.



\---



\## COMPONENTES PRINCIPAIS



Os principais componentes estão em:



src/components/



Entre eles:



\- Navbar.tsx

\- Hero.tsx

\- ScrollCanvas.tsx

\- LogoCarousel.tsx

\- BentoGrid.tsx

\- Projects.tsx

\- Simulator.tsx

\- Faq.tsx

\- Contact.tsx

\- Footer.tsx

\- FloatingWhatsApp.tsx



Antes de criar um novo componente, verificar se existe um

componente existente que possa ser reutilizado.



\---



\## IDENTIDADE VISUAL



O site utiliza uma identidade visual tecnológica,

moderna e profissional.



O conceito atual utiliza:



\- tema escuro;

\- estética cósmica;

\- glassmorphism;

\- efeitos de luz;

\- animações;

\- tipografia moderna;

\- destaque para tecnologia e soluções personalizadas.



Não alterar a identidade visual global sem necessidade.



Mudanças visuais importantes devem preservar coerência

entre todas as seções.



\---



\## PROJETOS



A seção Projects.tsx apresenta projetos reais desenvolvidos

pela JS Web \& Negócios.



Não inventar projetos, clientes, resultados, métricas,

depoimentos ou números.



Qualquer informação comercial deve ser baseada em dados

fornecidos pelo proprietário.



\---



\## CREDIBILIDADE COMERCIAL



O site deve priorizar credibilidade real.



Não utilizar:



\- métricas inventadas;

\- número falso de clientes;

\- avaliações fictícias;

\- depoimentos inventados;

\- resultados financeiros inventados;

\- "X projetos entregues" sem comprovação;

\- estatísticas artificiais.



Quando não houver uma informação real disponível,

é melhor omitir do que inventar.



\---



\## LICENCIAMENTO / FIRESTORE



Existe uma lógica relacionada ao licenciamento WaaS

e verificação no Firestore.



Essa lógica é considerada CRÍTICA.



Antes de modificar qualquer código relacionado a:



\- Firebase;

\- Firestore;

\- licenciamento;

\- identificação do cliente;

\- status de manutenção;

\- verificação periódica;



analisar cuidadosamente o funcionamento atual.



Nunca remover ou alterar essa lógica sem explicar:



1\. o que ela faz;

2\. qual arquivo será afetado;

3\. quais riscos existem;

4\. como será validado depois.



Não substituir uma implementação existente por outra

sem entender sua finalidade.



\---



\## ASSETS



Os assets oficiais utilizados pelo Next.js devem ficar

em:



public/



A pasta:



imagens/



na raiz é considerada legado.



Não duplicar imagens entre public/ e imagens/ sem

necessidade.



Antes de adicionar um asset pesado, verificar se já existe

uma versão adequada no projeto.



\---



\## SEO



O site utiliza metadados e dados estruturados.



Antes de modificar:



\- metadata;

\- Open Graph;

\- Twitter cards;

\- JSON-LD;

\- canonical;

\- URLs;

\- sitemap;

\- robots;



verificar se as URLs utilizadas correspondem ao ambiente

de produção atual.



A URL oficial atual é:



https://site-jhones-portifolio.vercel.app/



Não utilizar URLs antigas do GitHub Pages como URL oficial

sem autorização.



\---



\## DEPLOY



Antes de produção:



1\. verificar alterações;

2\. executar build;

3\. verificar erros;

4\. revisar funcionalidades afetadas;

5\. confirmar que não existem alterações acidentais;

6\. somente então realizar deploy.



Nunca executar deploy de produção automaticamente após uma

alteração sem que isso tenha sido solicitado.



\---



\## GIT



Antes de alterações importantes:



\- verificar git status;

\- identificar alterações locais existentes;

\- preservar trabalho não relacionado.



Nunca executar sem autorização:



git reset --hard

git clean -fd

git push --force



Não apagar alterações existentes apenas para obter um

estado "limpo".



\---



\## REGRA PARA ALTERAÇÕES



Antes de alterar um componente:



1\. ler o arquivo completo quando necessário;

2\. entender suas dependências;

3\. identificar o impacto;

4\. alterar somente o necessário;

5\. preservar funcionalidades existentes;

6\. testar.



Evitar refatorações grandes quando o pedido for apenas

uma alteração visual ou funcional pequena.



\---



\## TESTES



Após alterações:



\- executar npm run build quando a alteração justificar;

\- verificar erros TypeScript;

\- verificar erros de compilação;

\- verificar problemas evidentes de runtime;

\- revisar o resultado visual quando possível.



Nunca afirmar que algo foi testado se não foi.



\---



\## PRINCÍPIO FINAL



Este projeto é um ativo comercial da JS Web \& Negócios.



Priorizar:



SEGURANÇA

ESTABILIDADE

CREDIBILIDADE

MANUTENIBILIDADE

PERFORMANCE

EXPERIÊNCIA DO USUÁRIO



Uma alteração não deve ser considerada boa apenas porque

"funciona".



Ela deve funcionar sem comprometer o restante do projeto.

