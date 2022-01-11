import React from 'react';
import { DiFirebase, DiReact,DiZend,DiHtml5, DiCode, DiJavascript, DiCss3, DiAndroid } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './workexperienceStyles';

const Workexperience=()=>(
    <Section id="experience">

        <SectionTitle>Work Experience</SectionTitle>
        <List>
            <SectionText>Technical Intern</SectionText>
            BSNL: 05/19 - 06/19 <br/>
            Researched about digital data storage, NIB local and proposed improvements
        </List>
        <List>
            <SectionText>Instructor </SectionText>
            Coding Ninjas: 03/20 - 11/20 <br/>
            Mentored students in DSA and empowered kids by taking live coding classes (scratch, appInventor, AIplayground)
        </List>
        <List>
            <SectionText>Software Engineering Intern</SectionText>
            Fintract Global: 06/20- 08/20<br/>
            Team lead for dynamic chat-bot project created in IBM Watson and Deep Learning
        </List>
        <List>
            <SectionText>Data Analytic Intern</SectionText>
            Takenmind, Affiliated by United Nation: 01/2021 - 02/2021 <br/>
            Built an analytical solution to an existing problem in Finance Company and predicted which employees are prone to leave
        </List>
        <List>
            <SectionText>Content Writer</SectionText>
            Mitti ke Rang: 06/20 - 08/20 <br/>
            Wrote different technical, social and economical articles for Mitti ke rang medium house
        </List>
        <List>
            <SectionText>Secretary</SectionText>
            ACM: 08/18- 04/20 <br/>
            Organized various Workshops and  Fortnightly Code Battles
        </List>
        <SectionDivider/>
    </Section>
);
export default Workexperience;