interface NavlinkProps {
  href: string
  texto: string
}

function Navlink(props: NavlinkProps) {
  return (
    <li>
      <a href="{props.href}" className="text-l">{props.texto}</a>
    </li>
  )
}

export default Navlink