	function getMouseX(e) 
	{
	  return(e? e.clientX+window.scrollX: window.event.clientX+document.documentElement.scrollLeft + document.body.scrollLeft);
	}
	
	function getMouseY(e) 
	{
	  return(e? e.clientY+window.scrollY: window.event.clientY+document.documentElement.scrollTop
      + document.body.scrollTop);
	}
	