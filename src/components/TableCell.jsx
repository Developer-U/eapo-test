export default function TableCell( {id, typeEapo, subject, documentDate, fullName, depFullname} ) {
    return (    
        <tr>           
            <td>{id}</td>
            <td>{typeEapo}</td>
            <td>{subject}</td>
            <td>{documentDate}</td>
            <td>{fullName}</td>
            <td>{depFullname}</td>                           
        </tr> 
    )
  }