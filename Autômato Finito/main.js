//1º método - substring

document.getElementById('btn').addEventListener("click", isSubstring);

function isSubstring()
{
  var fita = document.getElementById('fita').value;
  var substring = document.getElementById('sub').value;
  var i = 0, j = 0;

  for(; i < fita.length - substring.length + 1; i++)
  {
    for(; j < substring.length; j++)
    {
      if(fita[i+j] == substring[j]) // compara dois a dois
      {
        if(j == substring.length - 1) // numero de comparações for igual ao tamanho da substring
        {
          alert(true);
          return;
        }
      }else
      {
        break;
      }
    }
  }

  alert(false);
}

// 2º método - Startswith

document.getElementById('btn2').addEventListener("click", isPrefix);

function isPrefix()
{
  var fita2 = document.getElementById('fita2').value;
  var prefixo = document.getElementById('pre').value;
  var i = 0, cont = 0;

  for(; i < prefixo.length; i++)
  {
    if(prefixo[i] == fita2[i])
    {
      cont++;
    }
  }

  if(cont == prefixo.length)
  {
    alert(true);
  }else
  {
    alert(false);
  }
}

// 3º Método - Endswith

document.getElementById('btn3').addEventListener("click", isSuffix);

function isSuffix()
{
  var fita = document.getElementById('fita3').value;
  var sufixo = document.getElementById('suf').value;
  var i = sufixo.length - 1, c = 0, aux = fita.length - 1;

  for(; i >= 0; i--)
  {
    if(sufixo[i] == fita[aux])
    {
      c++;
      aux--;
    }
  }

  if(c == sufixo.length)
  {
    alert(true);
  }else
  {
    alert(false);
  }
}
