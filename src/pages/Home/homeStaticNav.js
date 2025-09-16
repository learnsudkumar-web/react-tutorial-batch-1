import Lectures from "../Lectures";
import Assignments from "../Assignments";
import Projects from "../Projects";
import HomePageContent from "../../components/HomePageContent";
import InterviewQuestions from "../InterviewQuestions";
const homeNavs = [
    {
        id: "home",
        comp: <HomePageContent />
    },
    {
        id: "lectures",
        comp: <Lectures />
    },
    {
        id: "assignments",
        comp: <Assignments />
    },
    {
        id: "projects",
        comp: <Projects />
    },
    {
        id: "interview-questions",
        comp: <InterviewQuestions />
    }
]
export default homeNavs;