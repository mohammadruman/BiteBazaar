  const heading = React.createElement("h1",{
        id:"title",
        style:{
            color:"red"
        }
    },"Namaste Ruman");
     const heading2 = React.createElement("h1", {
            id: "title",
            style: {
                color: "red"
            }
        }, "Heading 2");

        const container = React.createElement("div",{
            id:"container",   
        },[heading,heading2]);
    const root =  ReactDOM.createRoot(document.getElementById("root"));
    root.render(container);
