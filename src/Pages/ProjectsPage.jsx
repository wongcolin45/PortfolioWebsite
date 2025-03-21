import Project from "../Components/Project.jsx";
import {planner, reactTacToe, chess, oasis} from "../ProjectInfo/projectInfo.js";
import NavBar from "../Components/NavBar.jsx";



function ProjectsPage() {



    return (
        <>
            <NavBar/>
            <h1 className="page-header">What I have built...</h1>
            <Project info={reactTacToe} projectLink = 'https://wongcolin45.github.io/ReactTacToe/'/>
            <br></br>
            <br></br>
            <Project info={planner} projectLink = 'https://northeastern-schedule-planner.vercel.app/'/>
            <br></br>
            <br></br>
            <Project info={chess} projectLink='https://chess2players.vercel.app/'/>
            <br></br>
            <br></br>
            <Project info={oasis} projectLink={'https://neu-bites.com'}/>
            <br></br>

        </>
    )

}

export default ProjectsPage;