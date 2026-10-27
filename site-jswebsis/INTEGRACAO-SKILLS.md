# Integração de skills — JS Web & Sistemas

Status: **preparação no repositório**. As skills só ficam instaladas na máquina após executar os instaladores oficiais. Este commit não executa código externo, não altera o site e não configura deploy.

## Ferramentas
- Hallmark (Nutlope): https://github.com/Nutlope/hallmark
- Impeccable (pbakaus): https://github.com/pbakaus/impeccable
- Cloudflare security-audit: https://github.com/cloudflare/security-audit-skill

## Instalar localmente (PowerShell, na pasta site-jswebsis)
Acesse a pasta `site-jswebsis` no VS Code/Antigravity. **Leia os READMEs e revise as opções propostas pelo instalador antes de aceitar.** Tenha Node.js e npm disponíveis.

```powershell
# Hallmark: instalação no projeto, sem -g
npx skills add nutlope/hallmark

# Impeccable: escolha "project" e o(s) agentes usados (Antigravity/Claude Code)
npx impeccable install

# Cloudflare: instalação no projeto, sem --global
npx skills add https://github.com/cloudflare/security-audit-skill --skill security-audit
```

**Observação:** Hallmark documenta suporte explícito a Claude Code, Codex, Cursor e OpenCode. Para Antigravity, só considerar integrado quando sua instalação for reconhecida e a skill invocada com sucesso; não presumir suporte. Impeccable documenta suporte ao Google Antigravity. A auditoria Cloudflare requer agente com subagentes e sandbox efetiva para testes dinâmicos.

## Checagem após instalar
1. Inspecionar `git status --short` e os diretórios de skills criados; não aceitar sobrescrita silenciosa de arquivos.
2. Reiniciar/recarregar o agente e confirmar que as skills aparecem no ambiente selecionado.
3. Solicitar **apenas auditoria** do `index.html` pelo Hallmark e pelo Impeccable; verificar que nenhum arquivo do site foi modificado.
4. Para segurança, começar com leitura estática; verificar capacidades reais de sandbox antes de qualquer teste ativo.
5. Revisar diferenças e resultados antes de qualquer commit, merge ou deploy.

## Uso seguro
- Hallmark: `/hallmark audit ./index.html` (em um agente com suporte e skill instalada).
- Impeccable: `/impeccable audit` ou `/impeccable critique` (conforme suporte do agente).
- Segurança: peça «faça uma auditoria de segurança somente de leitura, sem correções e sem executar testes dinâmicos sem sandbox».

## Regra de operação
Não fazer redesign nem aplicar automaticamente recomendações de skills. Manter o site atual como base, a identidade visual aprovada e os contratos existentes. Publicação via FTP continua manual e separada.
