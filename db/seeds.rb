# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



#5,6,8,9,13,14
ApplicationRecord.transaction do
Question.delete_all
Question.create!(
    title:"Sklearn complains about one-column dataframes",
    body:"I have server code than accepts commands from clients and executes object methods, 
    as determined by the command received. I want to build a stringlist using AddObject to 
    associate the command with the desired procedure. This works fine with standalone 
    procedures but I get variable required errors when trying to add object methods to 
    my stringlist. Here's example code:",
    owner_id:7
)

Question.create!(
    title:"Make a grid system in React which changes the number of rows and columns?",
    body:"I'm trying to do something like the following in React JSX (where ObjectRow is a separate component):

<tbody>
    for (var i=0; i < numrows; i++) {
        <ObjectRow/>
    } 
</tbody>
I realize and understand why this isn't valid JSX, 
since JSX maps to function calls. However, coming from template land and being new to JSX, I am unsure how 
I would achieve the above (adding a component multiple times).",
    owner_id:7
)

Question.create!(
    title:"Executing Excel Workbook via Shortcuts or from the Directory is Causing Problems in Office 365",
    body:"I want to convert Strings to Enums for a set of enum types. 
    I use an interface to mark what set of enums to convert and define a couple of methods used during conversion:",
    owner_id:7,
    tag_names:['first','second']
)

Question.create!(
    title:"How do I get data from a graph in a website that fetches data with API itself, using python?",
    body:"public class Order {
    static public class Product {
        public String name;
        public Integer quantity;
        public Float price;
    }
    public String clientName;
    public String clientPhone;
    ArrayList<Product> products = new ArrayList<Product>();
    public Float total;
}",
    owner_id:7
)

Question.create!(
    title:"Downloading a file at a specified location through python and selenium using Chrome driver",
    body:"My .net framework 4 service is using PrintDocument class of System.Drawing.Printing for printing.

How can I achieve this in .net core. I am not able to find System.Drawing.Printing in .net core.

Can someone guide me on this?",
    owner_id:13
)

Question.create!(
    title:"Javascript won't draw the animation taking value from HTML input element",
    body:"I'm trying to do something like the following in React JSX (where ObjectRow is a separate component):",
    owner_id:14
)

Question.create!(
    title:"How can you switch data from an activity that appears only once to another one that always appears, you register once and than you only need to login",
    body:"With react-router I can use the Link element to create links that are natively handled by react router.

I see internally it calls this.context.transitionTo(...).

I want to do a navigation, but not from a link, from a dropdown selection for example. How can I do this in code? What is this.context?

I saw the Navigation mixin, but can I do this without mixins?",
    owner_id:5
)

Question.create!(
    title:"Change One Attribute of ActiveRecord Associations CollectionProxy",
    body:"I am using a INSERT INTO statement to create a record. 
    and when a DUPLICATE KEY error exists, i use the ON DUPLICATE KEY UPDATE 
    statement to create a new records with a different number. Example:
Duplicate key is only on the name!",
    owner_id:6
)

Question.create!(
    title:"How to fill entire div with background color",
    body:"So I have an API endpoint that creates a Cache and validate if that cache 
    exist. However the Lookup Cache policy shows different responses across repeated 
    request of the same payload. It would show either true or false across multiple request. Why is this so?.",
    owner_id:7
)

Question.create!(
    title:"blocking logging messages with configured logging level",
    body:"My task is to write code to read/save only the rows with ['Match'] = True. 
    I have this code which does extract the rows with True matches from the table, 
    but the problem is the iteration is printing it 5 times(as many rows in table)
I know, I'm missing something silly.. Can anyone help me here please?",
    owner_id:9
)


end

