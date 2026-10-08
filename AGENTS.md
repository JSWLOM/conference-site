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

## Styling

- Buttons and nav links get their hover/press feedback from the shared
  `btn-anim` / `nav-underline` utilities in `src/styles.css`, so motion stays
  consistent across the site and automatically respects reduced-motion
  settings; extend those utilities there instead of hand-rolling hover classes
  on individual elements.
