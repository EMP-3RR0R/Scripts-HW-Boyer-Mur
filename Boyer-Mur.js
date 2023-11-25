function include(arr, symbol) {
    for (var i = 0; i < arr.length; i++) if (arr[i] === symbol) return true;
    return false;
}
function lastIndexOf(str, char) {
    for (var i = str.length - 1; i >= 0; i--) if (str.charAt(i) === char) return i;
    return -1;
}
var s = WScript.StdIn.Readline();
var t = WScript.StdIn.Readline();
var n = s.length;
var m = t.length;
alph = [];
pos = {};
for (var i = 0; i < m; i++)
{
    char = t.charAt(i);
    if (!include(alph, char))
    {
        alph.push(char);
        pos[char] = lastIndexOf(t, char);
    }
}
var i = 0
flag = false;
enter = false;
while (i<n-m+1)
    {
        var count = 0;
        for (j = i + m - 1; j >= i; j--)
            {
                count++;
                if (!include(alph, s.charAt(j)))
                    {
                        i = i + m - count;
                        flag = true;
                        break;
                    }
                else if (s.charAt(j)!=t.charAt(j - i))
                    {
                        i = i + Math.max(m - count - pos[s.charAt(j)], 1) - 1;
                        flag = true;
                        break;
                    }
            }
        if (!flag)
        {
            WScript.echo("Enter in position ", i);
            enter = true;
        }
        flag = false;
        i++;
    }
if(!enter) WScript.echo("No enter.")