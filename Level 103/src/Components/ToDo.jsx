import { useState } from "react";


// გექნებათ ერთი form სადაც მომხმარებელი ჩაწერს დავალებას, ჩაწერის შემდეგ ეს დავალება უნდა ჩაჯდეს მასივში და როგორცკი ახალი ელემენტი დაემატება ეგრევე უნდა გამოჩნდეს ეკრანზე.
const ToDoList = () => {
    const arr = []
    console.log(arr)
    
    const handleSubmit = (e) =>{
        e.preventDefault;

    }
    return (
        <>
        <form action="">
            <input type="text" name="input" id="input" />
        </form>
        </>
    )
}

export default ToDoList;