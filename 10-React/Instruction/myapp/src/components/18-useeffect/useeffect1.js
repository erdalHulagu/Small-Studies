import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';

const UseEffect1 = ({id}) => {
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    { /*  !!!!!STRICT MODE DEVREDEYKEN useEffect kodları ikişer defa çağrılaiblir.
               ÇAĞRILMAMASI GEREKEN UNMOUNTING ÇAĞRILABILIR
               STRICT MODE SADECE DEVLEOPMENT ORTAMINDA TESİRLİDİR !!!!!!!!! */}


    console.log(`Bu satır render ve re-render durumlarında ve 
    alttaki return kısmı render edilmeden önce çalıştırılır`);

    useEffect( ()=> {
        console.log(`
            MOUNTING: Bu bölümdeki kodlar sadece render durumunda çalışır.
            Ancak re-render larda çalışmaz.
        `)

        return ()=>{
            console.log(`
                UNMOUNTING: Bu bölüm component hafızadan atılmadan hemen önce çalıştırılır.
            `)
        }


    }, []);

    useEffect( ()=> {
        console.log(`
        UPDATING: Bu bölümdeki kodlar render ve re-render durumlarında ve 
        alttaki return kısmı render edildikten sonra çalıştırılır
        Bu useEffect özellikle alttaki elementlere useRef ile erişmek için kullanılır
        `);
    });


    useEffect( ()=> {
        console.log(`
        UPDATING: Bu bölümdeki kodlar alt taraftaki yazılan dependency lerin (message, id)
         değişmesi durumunda çalışır.
        `)
    }, [message, id]);




  return (
    <div>
        <div>{message} - {error}</div>
        <Button variant="info" onClick={()=>setMessage("Hello")}>Set Message</Button>
        <Button variant="danger" onClick={()=>setError("Some errors")}>Throw Error</Button>
    </div>
  )
}

export default UseEffect1