import { Route, Routes } from "react-router-dom"
import { Chat, Task } from "../views"

function Router () {
    return(
        <Routes>
            <Route path="/inbox/*" element={<Chat/>}/>
            <Route path="task" element={<Task/>}/>
        </Routes>
    )
}

export default Router