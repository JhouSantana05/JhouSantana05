# JS Web & Sistemas — orientação para agentes (site institucional)

Escopo: pasta `site-jswebsis/`. Estas orientações complementam as instruções do projeto, sem substituí-las.

## Identidade e estabilidade
- Preservar a marca **JS Web & Sistemas**, a tipografia, a paleta existente, o logo oficial, a hero aprovada e os comportamentos já funcionais.
- Nunca substituir layouts, conteúdo, imagens ou componentes apenas para aderir a uma tendência visual.
- Não inventar depoimentos, clientes, projetos, dados, números ou funcionalidades.
- Manter responsividade, acessibilidade, SEO, consentimento de cookies e analytics existentes.
- Nenhuma alteração na produção ou FTP sem autorização explícita.

## Como usar as skills
1. **Hallmark**: preferir o modo `audit` para identificar padrões genéricos; não executar `redesign` sem autorização expressa.
2. **Impeccable**: preferir `audit` e `critique`; só aplicar `polish` quando a alteração visual for solicitada.
3. **Cloudflare security-audit**: auditoria não é autorização de correção; analisar evidências, priorizar riscos e apresentar achados antes de editar.
4. Quando Hallmark e Impeccable discordarem, preservar a identidade aprovada e explicar a divergência.
5. Verificar modificações com diff e testes proporcionais ao escopo. Separar análise, alterações, testes, commit e publicação.

## Segurança de ferramentas externas
- Revisar scripts, hooks e permissões das dependências antes da primeira execução; não executar comandos de procedência desconhecida automaticamente.
- Evitar instalações globais por padrão. Instalar skills no escopo do projeto.
- Não fornecer tokens, credenciais, arquivos `.env` ou dados privados a ferramentas sem revisão.
- Para auditorias que exigem sandbox, não executar testes dinâmicos sem isolamento adequado.

## Instalação
Ver `INTEGRACAO-SKILLS.md` para comandos oficiais e checagens.
