function validate() {
	console.log('validate');
	var doc = document.forms[0];

	if (doc.RequestCategory.value == '') {
		alert('You must select a Product');
		return false;
	}

	if (doc.Level1Cat.value == 'Workflow/RIP') {
		if (doc.Level2Cat.value == 'XMF') {
			if (doc.RequestSerialNumber.value == '') {
				alert('You must enter a Serial Number');
				return false;
			}
		}
	}

	if (doc.RequestEndUser2.value == '') {
		alert('You must select an End User');
		return false;
	}

	if (doc.RequestDetailsShort.value == '') {
		alert('You must enter a Short Description');
		return false;
	}

	if (doc.RequestStartTime.value == '') {
		var value2 = dijit.byId('tbRequestDetails').getValue(false);

		if (dojo.isFF) {
			if (value2 == '<br _moz_editor_bogus_node="TRUE" />') {
				value2 = '';
			}
		}
	} else {
		var value2 = doc.RequestDetailsText.value;
	}

	if (value2 == '') {
		alert('You must enter a Description');
		return false;
	}

	return true;
}

function HideInputs() {
	//loop through links
	var anchors = document.getElementsByTagName('a');
	for (var loop = 0; loop < anchors.length; loop++) {
		anchors[loop].style.visibility = 'hidden';
	}

	//loop through buttons
	var anchors = document.getElementsByTagName('input');
	for (var loop = 0; loop < anchors.length; loop++) {
		if (anchors[loop].getAttribute('type') == 'button') {
			anchors[loop].disabled = true;
		}
	}
}

function saveAllocate() {
	if (validate()) {
		var doc = document.forms[0];
		doc.allocateTeamReal.click();
		HideInputs();
	}
}

function saveAllocateNew() {
	if (validate()) {
		saveAllocateModal();
	}
}

function abort() {
	var doc = document.forms[0];

	if (doc.IRNew.value == 0) {
		funCloseLock();
	} else {
		funCloseLock('delete');
	}
}

function sendNew() {
	if (validate()) {
		//var doc = document.forms[0];
		//doc.sendNewButton.disabled = true;
		funCloseLock('sendSupport');
	}
}

function sendNewNot() {
	if (validate()) {
		//var doc = document.forms[0];
		//doc.sendNewNotButton.disabled = true;
		funCloseLock('sendFFEI');
	}
}

function saveDraft() {
	if (validate()) {
		var doc = document.forms[0];
		alert('Please remember to send this Assistance Request to Support');
		doc.Draft.value = '1';
		doc.save.onclick();
		HideInputs();
	}
}

function deleteDoc() {
	var answer = confirm('Are you sure you want to delete this Assistance Request?');

	if (answer) {
		document.forms[0].deleteARbNew.onclick();
	}
}

function close() {
	funCloseLock();
}

function edit() {
	funEditLock();
}

function printDoc() {
	window.print();
	return false;
}

function forward() {
	doc = document.forms[0];
	window.open(doc.EWR_URL.value, 'win2', 'width=450,height=300,left=100,top=100');
}

function reopen() {
	url = location.href;
	url = url.replace('Open', 'Edit');
	window.location.href = url;
}

function doConfirm() {
	document.forms[0].confirm.onclick();
}

function attachNew() {
	if (validate()) {
		var doc = document.forms[0];
		//alert('Please remember to send this Assistance Request to Support')
		doc.Draft.value = '1';
		doc.save.onclick();
		//HideInputs();
		LaunchAttachmentsWindow();
	}
}

function attachNew1() {
	if (validate()) {
		var doc = document.forms[0];
		//alert('Please remember to send this Assistance Request to Support')
		doc.Draft.value = '1';
		doc.save.onclick();
		//HideInputs();
		sessionStorage.setItem('launchAttachmentsWindow', 'yes');
		//openWindow();
	}
}

function newPart() {
	document.forms[0].JSNewPart.onclick();
}

function newLib() {
	if (confirm('Are you sure you want to create a new Library Document?')) {
		document.forms[0].NewLibDoc.onclick();
	}
}

function newAR() {
	var pathname = window.location.pathname;
	var URL = pathname.substring(0, pathname.lastIndexOf('.nsf') + 5);
	var doc = document.forms[0];
	var r = confirm(
		"You are about to create a new Related Assistance Request for this Assistance Request.\n\nPlease click 'Cancel' if this is not what you intend."
	);

	if (r == true) {
		doc.NewARDoc.onclick();
	} else {
		//parent.location.href = URL + "Installform?OpenForm"
	}
}

function newIR() {
	var pathname = window.location.pathname;
	var URL = pathname.substring(0, pathname.lastIndexOf('.nsf') + 5);
	var doc = document.forms[0];
	var r = confirm(
		"You are about to create a new Installation Report for this Assistance Request.\n\nPlease click 'Cancel' if this is not what you intend."
	);

	if (r == true) {
		doc.NewIRDoc.onclick();
	} else {
		//parent.location.href = URL + "Installform?OpenForm"
	}
}
