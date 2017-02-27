/**
 * Created by richardcj on 19/12/16.
 */
module.exports = {
        supportsStorage:function()
        {
            try
            {
                return 'localStorage' in window && window['localStorage'] !== null;
            }
            catch (e)
            {
                return false;
            }
        },
        store:function(name,value)
        {
            localStorage.setItem(name,JSON.stringify(value)); //html5 stores everything as a string so we convert to string to retain our format
        },
        retrieve:function(name)
        {
            if ( localStorage.getItem(name))
                return JSON.parse(localStorage.getItem(name));
            else
                return false;
        },
        checkExists:function(name) //checks to see if an item has been stored in local storgae before
        {
            if(localStorage.getItem(name))
                return true;
            else
                return false;
        },
        clearAll:function()
        {
            clear: localStorage.clear();
            return false;
        },
        clearOne:function(name)
        {
            localStorage.removeItem(name);
        }
    }