export default function HelloWorld(){
    const a = 10;
    const link = "https://cdn.britannica.com/89/149189-050-68D7613E/Bengal-tiger.jpg";
    const addition = (value:number)=>value+10;

    function Add(){
        let a=11;
        alert (a);
    }
    return (
        <>
        <h1>   Hello World........!!</h1>
        <h2>    Welcome in my Country India...............!!!</h2>

        <span>   The value a double is {a*2}</span>
        <img src={link} />
        <span>    Add 10 number to given number {addition(5)}...............!!!</span>

        <button onClick={()=>{
            alert("hi.....I am Rajneesh Chaudhary");
        }}>Submit</button>
        <button onClick={Add}>ADD</button>
        </>
    )
}