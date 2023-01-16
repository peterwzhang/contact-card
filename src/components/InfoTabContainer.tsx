import InfoTab from "./InfoTab"
interface InfoTabContainerProps {
    socials:Array<SocialInfo>
}
export default function InfoTabContainer(props:InfoTabContainerProps){
    return (
        <div>
            {props.socials.map(s => (<InfoTab social={s}></InfoTab>))}
        </div>
    )
}