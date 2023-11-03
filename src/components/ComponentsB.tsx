import { nameorAge } from "@/app/page";
import { useContext } from "react";

function ComponentsB() {
    const data = useContext(nameorAge)
    return <div>
        {data}
    </div>;
}

export default ComponentsB;
