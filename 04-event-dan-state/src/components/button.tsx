export function Tombol_2({isiPesan, namaTombol1}:any) {
    return(
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
            onClick={() => alert(isiPesan)}>
            {namaTombol1}
        </button>
    );
}

export function Tombol_3({isiPesan, namaTombol1}:any) {
    return(
        <button
            className="bg-green-500 hover:bg-green-700 text-white p-2 rounded m-2"
            onClick={(e) => {
                e.stopPropagation();
                alert(isiPesan)
                }   
            }>
            {namaTombol1}
        </button>
    );
}

export default function Tombol_1() {
    function handleClick() {
        alert("Taraaa Mak Jrengg!!!");
    }

    function handleMouseOver() {
        alert("Eits, tidakk bisaa!!!");
    }
    
    return(
        <button className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
        onClick={handleClick}
        // onMouseOver={handleMouseOver}
        onMouseLeave={() => {
            alert("Loh, kok sudah pergi!!!")
        }}
        >
            Tombol Rahasia
        </button>
    );
}