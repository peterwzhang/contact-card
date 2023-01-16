import InfoTab from "./InfoTab"
interface InfoTabContainerProps {
    socials:Array<SocialInfo>
}
export default function InfoTabContainer(props:InfoTabContainerProps){
    return (
        <div>
            {props.socials.map(s => (<InfoTab key={s.type} social={s}></InfoTab>))}
        </div>
    )
}