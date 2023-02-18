/**
 * Helper function to check for default .css names
 * 
 * Trim the string and check if it's empty
 * If true return the default given name.
 * 
 * NOTE: DOES NOT CHECK IF CSS CLASS IS VALID
 * 
 * TODO: 
 * 
 * @param InputName
 * @param DefaultName
 * 
 * @returns string
 */
export default function EmptyClassName({ InputName, DefaultName }) {

    if(InputName == "DoesNotExist" || InputName == "") {
        return DefaultName;
    }

        console.log(document.styleSheets.length);


    return InputName;

}