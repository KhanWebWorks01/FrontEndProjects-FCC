       // Get input element
        let filterInput = document.getElementById('filterInput');
        // Add eventlistener
        filterInput.addEventListener('keyup',filterNames);
        function filterNames(){
            //Get value of the input
            let filterValue = document.getElementById('filterInput').value.toUpperCase();
            
            //Get names ul
            let ul = document.getElementById('names');
            //Get lis from ul
            let li = ul.querySelectorAll('li.collection-item');

            // loop through collection items lis
            for(let i = 0; i < li.length; i++)
            {
                let a = li[i].getElementsByTagName('a')[0];
                // if matched
                if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
                    li[i].style.display ='';
                }
                else{
                    li[i].style.display = 'none';
                }
            }
        }
