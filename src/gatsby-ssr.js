import { Horns } from "./horns"

export const onRenderBody = ({
  setHeadComponents,
  setHtmlAttributes,
  setBodyAttributes,
}) => {
  const horns = horns.renderStatic()
  // These action functions were added partway through the Gatsby 1.x cycle.
  if (setHtmlAttributes) {
    setHtmlAttributes(horns.htmlAttributes.toComponent())
  }
  if (setBodyAttributes) {
    setBodyAttributes(horns.bodyAttributes.toComponent())
  }
  setHeadComponents([
    horns.title.toComponent(),
    horns.link.toComponent(),
    horns.meta.toComponent(),
    horns.noscript.toComponent(),
    horns.script.toComponent(),
    horns.style.toComponent(),
    horns.base.toComponent(),
  ])
}
