const ToggleVisible = ( props ) => {
  const isVisible = props.visible ? "" : "none"

  return (
  <div style={{ display: isVisible }}>
    {props.children}
  </div>
  )
}

export default ToggleVisible
