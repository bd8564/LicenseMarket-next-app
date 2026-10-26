function Todos{
    const handleClick=()=>{
        const data={
            title:inputeData,
            completed:false
        };
        console.log(inputData);
        fetch("http://practice.amirm.me/todos",{
            method:"POST",
            headers:{"Content_Type":"application/json"},
            body:JSON.stringify(data),
        }).then(async(res));

        };

        )
    }
}