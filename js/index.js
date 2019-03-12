const selectBox = document.getElementById('langBox');
const editDiv = document.getElementById('editor');
const editor = ace.edit("editor");
editor.setTheme("ace/theme/cobalt");
editor.getSession().setMode("ace/mode/javascript");
editor.getSession().setTabSize(2);
editor.getSession().setUseWrapMode(true);

selectBox.addEventListener('change', function () {
    if(this.value === 'js'){
        changeCode(editor,
            'ace/mode/javascript',
            'changed to js',
            'class Erik {\n' +
            '    constructor(){\n' +
            '        this.skills = [\n' +
            '            \'JavaScript\',\n' +
            '            \'PHP\',\n' +
            '            \'CSS\',\n' +
            '            \'HTML\',\n' +
            '            \'Java\'\n' +
            '            ];\n' +
            '        this.hasDevJob = false;\n' +
            '    }\n' +
            '    get resume(){\n' +
            '        return \'contact.php\';\n' +
            '    }\n' +
            '\n' +
            '    get portfolio(){\n' +
            '        return \'portfolio.php\';\n' +
            '    }\n' +
            '\n' +
            '    get blog(){\n' +
            '        if(confirm(\'Are you sure you want to read these ramblings?\')){\n' +
            '            return \'blog.php\';\n' +
            '        }\n' +
            '    }\n' +
            '\n' +
            '    get favoriteBeer(){\n' +
            '        if(hefeweizen){\n' +
            '            return \'Hefeweizen\';\n' +
            '        } else if(craftWheatBeers){\n' +
            '            return \'Craft Wheat Beers\';\n' +
            '        } else {\n' +
            '            return \'Blue Moon, I guess...\';\n' +
            '        }\n' +
            '    }\n' +
            '}');

    } else if(this.value === 'php'){
        changeCode(editor,
            'ace/mode/PHP',
            'changed to php',
            'class Erik\n' +
            '{\n' +
            '    var $skills = [];\n' +
            '    var $hasDevJob = false;\n' +
            '\n' +
            '    function __construct(){\n' +
            '        $skills = [\'JavaScript\',\n' +
            '                   \'PHP\',\n' +
            '                   \'CSS\',\n' +
            '                   \'HTML\',\n' +
            '                   \'Java\'];\n' +
            '    }\n' +
            '\n' +
            '    function getResume(){\n' +
            '        return \'contact.php\';\n' +
            '    }\n' +
            '\n' +
            '    function getPortfolio(){\n' +
            '        return \'portfolio.php\';\n' +
            '    }\n' +
            '\n' +
            '    function getBlog(){\n' +
            '        return \'blog.php\';\n' +
            '    }\n' +
            '\n' +
            '    function getFavoriteBeer(){\n' +
            '        if(hefeweizen){\n' +
            '            return \'Hefeweizen\';\n' +
            '        } else if(craftWheatBeers){\n' +
            '            return \'Craft Wheat Beers\';\n' +
            '        } else {\n' +
            '            return \'Blue Moon, I guess...\';\n' +
            '        }\n' +
            '    }\n' +
            '}');
    } else if(this.value === 'java'){
        changeCode(editor,
            'ace/mode/java',
            'changed to Java',
            'import phpWebpage;\n' +
            'import javax.swing.JOptionPane;\n' +
            'import javax.swing.JDialog;\n' +
            '\n' +
            'public class Erik{\n' +
            '    Array skills = new Array();\n' +
            '    boolean hasDevJob = false;\n' +
            '\n' +
            '    public Erik(){\n' +
            '        skills.add(\'JavaScript\');\n' +
            '        skills.add(\'PHP\');\n' +
            '        skills.add(\'CSS\');\n' +
            '        skills.add(\'HTML\');\n' +
            '        skills.add(\'Java\');\n' +
            '    }\n' +
            '\n' +
            '    public phpWebpage getResume(){\n' +
            '        return contact.php;\n' +
            '    }\n' +
            '\n' +
            '    public phpWebpage getPortfolio(){\n' +
            '        return portfolio.php;\n' +
            '    }\n' +
            '\n' +
            '    public phpWebpage getBlog(){\n' +
            '        int response = JOptionPane\n' +
            '                    .showConfirmDialog(null,\n' +
            '                    "Are you sure you want to read these ramblings?",\n' +
            '                    "Confirm", JOptionPane.YES_NO_OPTION,\n' +
            '                    JOptionPane.QUESTION_MESSAGE);\n' +
            '        if (response == JOptionPane.YES_OPTION) {\n' +
            '            return blog.php;\n' +
            '        }\n' +
            '    }\n' +
            '\n' +
            '    public getFavoriteBeer(){\n' +
            '        if(hefeweizen){\n' +
            '            return \'Hefeweizen\';\n' +
            '        } else if (craftWheatBeers){\n' +
            '            return \'Craft Wheat Beers\';\n' +
            '        } else {\n' +
            '            return \'Blue Moon I guess...\';\n' +
            '        }\n' +
            '    }\n' +
            '}')
    }
});

function changeCode(editor, mode, log, newcode){
    editor.getSession().setMode(mode);
    editor.selectAll();
    editor.removeLines();
    console.log(log);
    editor.insert(newcode);
}
