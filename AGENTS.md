<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep this prototype's sample marketplace state in a shared React context, without persistence or real authentication, so demo actions work across routes without implying live transactions.
- Use TanStack leaf routes for marketplace, item details, saved items, listings, and messages, so each screen supports forward and back navigation.
