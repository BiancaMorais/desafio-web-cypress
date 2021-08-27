const report = require('multiple-cucumber-html-reporter');

var today = new Date();
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + "h" + today.getMinutes() + "m" + today.getSeconds() + "s";
var dateTime = date+'_'+time;

report.generate({
	jsonDir: 'cypress/cucumber-json/',
	reportPath: "cypress/reports/MultipleReport_"+dateTime+".html",
	metadata:{
        browser: {
            name: 'Google Chrome',
            version: '93.0.4577.51'
        },
        device: 'Local Test Machine',
        platform: {
            name: 'Windows',
            version: '10'
        }
    },
    customData: {
        title: 'Run info',
        pageTitle: 'Automation Web Cypress',

        data: [
            {label: 'Project', value: 'Automation Web Cypress'},
            {label: 'Description', value: 'Automation performed to apply Cucumber to Cypress.'},
            {label: 'Release', value: '1.0.0'},
            {label: 'Scenario 1', value: 'Search for Faded Short Sleeve'},
            {label: 'Scenario 2', value: 'Add Faded Short Sleeve to Cart'},
            
        ]
    }
});