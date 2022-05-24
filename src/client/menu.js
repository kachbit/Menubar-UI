// create a menu bar based on a JSON tree
var tree = {
  "file": {
    "content": "File",
    "subMenu": {
      "new_": {
        "content": "New >",
        "subMenu": {
          "project": {
            "content": "Project",
            "subMenu": false
          },
          "file": {
            "content": "File",
            "subMenu": false
          }
        }
      },
      "open": {
        "content": "Open >",
        "subMenu": {
          "project": {
            "content": "Project",
            "subMenu": false
          },
          "folder": {
            "content": "Folder",
            "subMenu": false
          },
          "file": {
            "content": "File",
            "subMenu": false
          }
        }
      }
    }
  },
  "Edit": {
    "content": "Edit",
    "subMenu": {
      "undo": {
        "content": "Undo",
        "subMenu": false
      },
      "redo": {
        "content": "Redo",
        "subMenu": false
      },
      "cut": {
        "content": "Cut",
        "subMenu": false
      },
      "copy": {
        "content": "Copy",
        "subMenu": false
      },
      "paste": {
        "content": "Paste",
        "subMenu": false
      },
      "selectAll": {
        "content": "Select All",
        "subMenu": false
      }
    }
  }
}

function createMenu(tree) {
  var menu = document.createElement("ul");
  menu.id = "menubar";
  for (var key in tree) {
    var item = document.createElement("li");
    item.innerHTML = "<div>"+tree[key].content+"</div>";
    
    if (tree[key].subMenu) {
      item.classList.add('parent')
      var subMenu = createMenu(tree[key].subMenu);
      item.appendChild(subMenu);
    }
    menu.appendChild(item);
  }
  return menu;
}
// create a menu bar based on a JSON tree
var menu = createMenu(tree);
document.body.appendChild(menu);
render();