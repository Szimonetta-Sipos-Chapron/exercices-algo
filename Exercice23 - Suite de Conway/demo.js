function suiteConway(depth)
{
    let suite = "1";
    
    console.log(suite);

    for(let index = 1; index < depth; index++)
    {
        let newTerme = "";
        let count = 1;

        for(let n = 1; n <suite.length; n++)
        {
            if(suite[n] === suite[n - 1])
            {
                count++
            }
            else 
            {
                newTerme += count + suite[n -1]
                count = 1;
            }
        }

        newTerme += count + suite[suite.length - 1];

        suite = newTerme;

        console.log(suite);

    }

    return suite;
};

const depth = 10;
const suiteResult = suiteConway(depth);