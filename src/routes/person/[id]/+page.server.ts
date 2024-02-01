import Person from '$lib/services/persons'
    
    export async function load({params}){
        const id = params.id;
        
        const [person, credit] = await Promise.allSettled([
                    Person.getDetail(id),
                    Person.getCredits(id)
        ])
       
          
          const  personData = 
                person.status === 'fulfilled' && person.value?.ok ? await person.value.json() :null
             
             const creditData= credit.status === 'fulfilled' && credit.value?.ok ? await credit.value.json() :null
          
        return {personData, creditData}
    }