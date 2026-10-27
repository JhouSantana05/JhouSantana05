# Skills para Claude Code no VS Code — JS Web & Sistemas

Status: **configuração documentada em branch**, ainda sem instalação no computador local. Site, produção, FTP e branch main inalterados.

## Contexto
- Editor principal: VS Code.
- Agente principal: Claude Code.
- Pasta-alvo: `site-jswebsis/`.
- Escopo: **somente este projeto**, nunca `--global` ou `-g`.
- Repositórios oficiais: [Hallmark](https://github.com/Nutlope/hallmark), [Impeccable](https://github.com/pbakaus/impeccable), [Cloudflare Security Audit](https://github.com/cloudflare/security-audit-skill).

## Preparação local

Abra o terminal do VS Code na pasta raiz do repositório e confira `git status --short` antes de trocar de branch. Caso haja alterações locais, salve-as com segurança primeiro; não use `reset --hard` nem `clean -fd`. Depois de confirmar o estado, use a branch `chore/integrar-skills-design-seguranca` para obter estas instruções.

No terminal PowerShell da pasta `site-jswebsis/`, com Node.js instalado, execute **uma ferramenta por vez**. Leia os prompts antes de confirmar, incluindo possíveis hooks:

```powershell
# 1. Hallmark — provider Claude Code, escopo projeto
npx skills add nutlope/hallmark --agent claude-code

# 2. Impeccable — provider Claude Code, escopo projeto.
# --no-hooks evita instalação automática de hooks durante a avaliação inicial.
npx impeccable install --providers=claude --scope=project --no-hooks

# 3. Cloudflare — escolha Claude Code e project quando o instalador perguntar
npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit
```

A CLI Skills pode perguntar sobre agentes, escopo e escolhas de instalação. Se não for possível restringir a Claude Code **e** project, cancele e revise `npx skills --help` antes de continuar.

## Revisão e ativação
1. Confira os arquivos criados, normalmente sob `.claude/skills/`, e `git status --short`.
2. Leia os arquivos `SKILL.md`, scripts e configurações; não habilite hooks automaticamente.
3. Reabra a sessão do Claude Code no VS Code.
4. Confira se o Claude reconhece `hallmark`, `impeccable` e `security-audit`. Se alguma não aparecer, examine a pasta criada e a documentação do instalador antes de tentar instalar de novo.
5. Teste apenas leitura: peça ao Hallmark auditoria do `index.html`, ao Impeccable crítica sem aplicar mudanças e à Cloudflare uma revisão estática sem executar código do alvo.
6. Confirme ausência de alterações em arquivos de produção; reporte os achados antes de qualquer alteração, commit ou deploy.

## Limites das ferramentas
- Hallmark: comando documentado `/hallmark audit ./index.html`; modo redesign não autorizado.
- Impeccable: detecta padrões de UI, mas a Inter é a fonte aprovada da marca. Não troque tipografia, cores ou layout por sugestões genéricas. Instalamos inicialmente **sem hooks**. Se aprovado futuramente, revisar antes de ativar hooks automáticos.
- Cloudflare: auditoria completa requer agente com subagentes e sandbox **imposto pelo sistema operacional**, com rede externa bloqueada e recursos limitados. Sem esse isolamento, não executar builds, servidores, fuzzing ou testes dinâmicos de código não confiável; reportar pendências como `needs_validation`.
- Nunca enviar segredos, credenciais ou `.env` para ferramentas externas.

## Operação
A skill não substitui revisão humana. Auditoria não autoriza correção. Modificação no site requer pedido explícito, verificação de diff e testes adequados. Merge e deploy são etapas independentes.
