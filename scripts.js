
//console.log("I am inside here");
//window.location.reload();
//eval("$Lightning.get('e.force:refreshView').fire();");
$Lightning.use("runtime_appointmentbooking:lightningOutGuest",
function() {                  // Callback once framework and app load
        $Lightning.createComponent(
            "lightning:flow",    // top-level component of your app
            { },    // attributes to set on the component when created
            "lexcontainer",    // the DOM location to insert the component
            function(component) {            // API name of the Flow
                component.startFlow("Inbound_Custom_Guest_Appointment");
            }
        )
    },    'https://reeceusa.my.salesforce-sites.com/'  // Site endpoint
);
