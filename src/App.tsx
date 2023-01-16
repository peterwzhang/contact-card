import React from "react";
import styles from "./App.module.css";
import ProfilePicture from "./components/ProfilePicture";
import MainInfo from "./components/MainInfo";
import InfoTabContainer from "./components/InfoTabContainer";
import AboutInfo from "./components/AboutInfo";

const pfpPath: string = "/images/profilepic.jpg"
const myName: string = "Peter Zhang";
const myRole: string = "UA CS Graduate";
const aboutMe: string =
    "I recently graduated summa cum laude with my bachelors in computer science from the University of Alabama (UA). During my early years at UA, I used bash and python to automate tedious tasks which eventually lead to my passion in frontend design. I love learning about new ways to make tasks convenient for users.";
const socialArray: Array<SocialInfo> = [
    { type: "webpage", title: "peterwzhang.github.io", desc: "website", link: "https://peterwzhang.github.io/"},
    { type: "linkedin", title: "pwzhang", desc: "linkedin", link: "https://www.linkedin.com/in/pwzhang/"},
    { type: "github", title: "peterwzhang", desc: "github", link: "https://github.com/peterwzhang"},
    { type: "mail", title: "peter.w.zhang@gmail.com", desc: "mail", link: "mailto:peter.w.zhang@gmail.com"},
    // { type: "instagram", title: "my instagram", desc: "instagram", link: ""},
    // { type: "snapchat", title: "my snapchat", desc: "snapchat", link: ""},
    // { type: "twitter", title: "my twitter", desc: "twitter", link: ""},
];

function App() {
    return (
        <div className={styles.center}>
            <div className={styles.app}>
                <ProfilePicture imgPath={pfpPath} />
                <MainInfo name={myName} role={myRole} />
                <AboutInfo desc={aboutMe} />
                <InfoTabContainer socials={socialArray} />
            </div>
        </div>
    );
}

export default App;
