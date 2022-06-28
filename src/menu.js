class Menu {
  constructor(tree,container) {
    var menu = this.createMenu(tree,container);
    this.render();
    return menu;
  }
  createMenu(tree,container) {
      var menu = document.createElement("ul");
  var func;
  menu.id = "menubar";
  for (var key in tree) {
    var item = document.createElement("li");
    try {
      tree[key].content.match(/(?<=\{%)(.*?)(?=\%})/)[0];
      func = tree[key].content.match(/(?<=\{%)(.*?)(?=\%})/)[0]
      item.innerHTML = `<div onclick="${func}()">`+(tree[key].content).replace(/(?<=\{%)(.*?)(?=\%})/,"").replace("{%%}","").trim()+"</div>";
    } catch {
      func = tree[key].content
      item.innerHTML = `<div onclick="${func}()">`+tree[key].content+"</div>";
    }
    
    if (tree[key].subMenu) {
      item.classList.add('parent')
      var subMenu = this.createMenu(tree[key].subMenu);
      item.appendChild(subMenu);
    }
    menu.appendChild(item);
  }
    if(container) {
      container.appendChild(menu)
    } else {
      document.body.appendChild(menu)
    }
  return menu;
  }
  render() {
 
    $('#menubar').menu();
    
    $('#menubar').menu({
      position: { my: 'left top', at: 'left bottom' },
      blur: function() {
        $(this).menu('option', 'position', { my: 'left top', at: 'left bottom' });
      },
      focus: function(e, ui) {
        if ($('#menubar').get(0) !== $(ui).get(0).item.parent().get(0)) {
          $(this).menu('option', 'position', { my: 'left top', at: 'right top' });
        }
      },
    });
    console.log($("#menubar"))
  }
}