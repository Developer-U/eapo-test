import {useState, useEffect} from 'react';
import TableCell from './TableCell'

export default function Tabreestr() {
    let [reestr, setReestr] = useState(null)

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJJaWduYXRraW5AZWFwby5vcmciLCJzY29wZSI6WyJicm93c2VyIl0sImV4cCI6MTg2OTUzMjY1NCwiYXV0aG9yaXRpZXMiOlsiUk9MRV9VU0VSIl0sImp0aSI6IlNGWi1iVmZwVXpSWVlwTURRM0dqUThXbk9HUSIsImNsaWVudF9pZCI6ImFwaSIsInVwaSI6IjU5WHNzMG9MVVA5dmptRlBzMTdDWGc9PSJ9.N2TgBXkNzzsX_6eVjZqjrrIRzqh3f5L2LYRiqDx3a5o8jAp1aw7gJ6xfKba03z60Jmdmz9t0p2F3xw-PsvbAxXOgdXzAouLl4vU8i7P1NkxZVQ5UqESk93E7_jhZtLg4gNSukwzqfPGmg-1w1rGecCQyTlxSiVRIOTSvj3UIJyECv8pZpkuMcn5XPTO1T933VqxuLTDRNKFp-6M32aHfemgk-mRLCj9s9zNHszLhXFClw54yVBYoiSIiMHuvnYL8e8HAtn_LpdkGTqG6lP05xNaXdKtJRGwSCRVgpV7f9drz6x2W2yF8gn64lKLfgVt3YLHMpY01iVG2GoJ2pbIq3w");

        const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow"
        };

        fetch("http://212.176.91.138:17701/api/paging/assignments?take=200&skip=0&active=true&reverse=true&type=all&userId=394\n&id&typeEapo", requestOptions)
        .then(response => response.json())
        .then(data => setReestr(data.records))
        .catch((error) => console.error(error));

        
    }) 

    console.log(reestr);

    return (
        <div className='app-right__tab'>
            <h2>Реестр документов</h2>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>typeEapo</th>
                        <th>subject</th>
                        <th>documentDate</th>
                        <th>author.fullName</th>
                        <th>author.department.fullName</th>                                     
                    </tr>
                </thead>

                <tbody>                    
                    {reestr && reestr.map(cell => 
                        <TableCell 
                            id={cell.id} 
                            typeEapo={cell.typeEapo}
                            subject={cell.subject}
                            documentDate={cell.documentDate}
                            fullName={cell.author.fullName}
                            depFullname={cell.author.department.fullName}
                        /> 
                    )}                   
                </tbody>                
            </table>
        </div>
    )
}