import ComponentsB from "./ComponentsB";

function ComponentsA() {
    return <div>
        {/* <p>{props.name}</p>
        <p>{props.age}</p> */}
        <ComponentsB />
    </div>;
}

export default ComponentsA;
