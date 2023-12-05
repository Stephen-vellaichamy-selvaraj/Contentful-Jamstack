$Lightning.use("runtime_appointmentbooking:lightningOutGuest",
    function() {                  // Callback once framework and app load
        $Lightning.createComponent(
            "lightning:flow",    // top-level component of your app
            { },    // attributes to set on the component when created
            "lexcontainercancel",    // the DOM location to insert the component
            function(component) {            // API name of the Flow
                component.startFlow("Inbound_Cancel_Appointment_custom");
            }
        );
    },    'https://reeceusa.my.salesforce-sites.com/'  // Site endpoint
);

$Lightning.use("runtime_appointmentbooking:lightningOutGuest",
function() {                  // Callback once framework and app load
    $Lightning.createComponent(
        "lightning:flow",    // top-level component of your app
        { },    // attributes to set on the component when created
        "lexcontainermodify",    // the DOM location to insert the component
        function(component) {            // API name of the Flow
            component.startFlow("Inbound_Modify_Appointment_Custom1");
        }
    );
},    'https://reeceusa.my.salesforce-sites.com/'  // Site endpoint
);
