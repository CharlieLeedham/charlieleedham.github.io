AFRAME.registerComponent('work-item', {
    init: function () {
        var workItems = document.querySelectorAll('[work-item]');
        var workItemTitle = document.querySelectorAll('.work-item-title');

        // ID / Title / Description / Link
        var workArray = [
            ['#cjsPropertyServices', 'Cj\'s Property Services', 'Custom built WordPress theme using ACF \nand Facebook API. Client wanted a website \nwhere they didn\'t have to update manually, \nso I developed and designed a website \nusing the Facebook API of public pages.', 'cjspropertyservices.co.uk'],
            ['#pageBuilder', 'Edit Websites', 'Worked with a team of developers \ndeveloping a page builder for a software \ncompany using Laravel as the framework. \nAbit like Wix.com where customers can \nlogin and start building their own website.', 'chester.anglican.org'],
            ['#react', 'To Do App', 'Recently learning React and built a simple to \ndo app where the user can create, read and \ndelete their tasks. I am looking to learn \nRedux on top of this for it\'s state \nmanagement capabilities.', 'react.charlieoleedham.co.uk'],
            ['#cordeeple', 'Cordeeple', 'Worked with a team of developers using WordPress Elementor for a startup \nmarketing company based in Canada. \nI Solicited with the client their wants /  \nneeds and gave ideas.', 'cordeeple.ca'],
            ['#propeller', 'Propeller', 'Worked for Propeller for 2 and half years as \na Front-end developer, developing on many WordPress sites from hospitality to fashion \nfrom small changes to full on websites. Sometimes worked on FuelPHP websites.', 'propeller.co.uk'],
            ['#charlottesWeb', 'Charlotte\'s Web', 'My university dissertation project I worked \nwith a tattooist (Charlotte\'s Web) based in Northampton. Built a custom PHP system \nusing OOP and PDO where the client can \ntake bookings and upload portfolios.', 'cw.charlieoleedham.co.uk']
        ]

        this.el.addEventListener('click', getIndex);

        function getIndex(evt) {
            if (document.querySelector('[go-back]').getAttribute('visible') == false) {
                this.setAttribute('material', 'color: ')

                document.querySelector('#workItemsTitle').setAttribute('visible', 'false')
                document.querySelector('#selectedWorkTitle').setAttribute('visible', 'true')
                document.querySelector('#selectedWorkLink').setAttribute('visible', 'true')
                document.querySelector('#selectedWorkLink').setAttribute('can-countdown', 'true')
                document.querySelector('#selectedWorkDescription').setAttribute('visible', 'true')
                document.querySelector('[go-back]').setAttribute('visible', 'true')
                document.querySelector('[go-back]').setAttribute('can-countdown', 'true')

                for (var i = 0; i < workItemTitle.length; i++) {
                    workItemTitle[i].setAttribute('visible', 'false')
                }

                for (var i = 0; i < workItems.length; i++) {
                    if (workItems[i] == evt.target) {
                        document.querySelector('#selectedWorkTitle').setAttribute('text', 'value:' + workArray[i][1])
                        document.querySelector('#selectedWorkLink').setAttribute('text', 'value:' + workArray[i][3])
                        document.querySelector('#selectedWorkDescription').setAttribute('text', 'value:' + workArray[i][2])

                        for (var j = 0; j < workItems.length; j++) {
                            workItems[j].setAttribute('src', workArray[i][0] + j)
                        }
                    }
                    workItems[i].setAttribute('can-countdown', 'false')
                }
            }
        }

        this.el.addEventListener('mouseenter', function (evt) {
            if (document.querySelector('[go-back]').getAttribute('visible') == false) {
                this.setAttribute('material', 'color: #0077cc')
            }
        });
        this.el.addEventListener('mouseleave', function (evt) {
            this.setAttribute('material', 'color: ')
        });
    }
});

AFRAME.registerComponent('go-back', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
            var workItems = document.querySelectorAll('[work-item]');
            var workItemTitle = document.querySelectorAll('.work-item-title');
            var workArray = ['#cjsPropertyServices0', '#pageBuilder0', '#react0', '#cordeeple0', '#propeller0', '#charlottesWeb0']

            this.setAttribute('can-countdown', 'false')

            document.querySelector('#selectedWorkTitle').setAttribute('visible', 'false')
            document.querySelector('#selectedWorkLink').setAttribute('visible', 'false')
            document.querySelector('#selectedWorkLink').setAttribute('can-countdown', 'false')
            document.querySelector('#selectedWorkDescription').setAttribute('visible', 'false')
            document.querySelector('[go-back]').setAttribute('visible', 'false')
            document.querySelector('#workItemsTitle').setAttribute('visible', 'true')

            for (var i = 0; i < workItemTitle.length; i++) {
                workItemTitle[i].setAttribute('visible', 'true')
            }

            for (var i = 0; i < workItems.length; i++) {
                workItems[i].setAttribute('src', workArray[i])
                workItems[i].setAttribute('can-countdown', 'true')
            }
        });
        this.el.addEventListener('mouseenter', function (evt) {
            this.setAttribute('text', 'color:#0077cc')
        });
        this.el.addEventListener('mouseleave', function (evt) {
            this.setAttribute('text', 'color: grey')
        });
    }
});

AFRAME.registerComponent('a-link', {
    init: function () {
        var workItems = document.querySelectorAll('[a-link]');

        this.el.addEventListener('click', getIndex);

        function getIndex(evt) {
            for (let i = 0; i < workItems.length; i++) {
                if (workItems[i] == evt.target) {
                    document.getElementsByClassName('a_link')[i].click();
                }
            }
        }

        this.el.addEventListener('mouseenter', function (evt) {
            this.setAttribute('text', 'color: #0077cc')
        });
        this.el.addEventListener('mouseleave', function (evt) {
            this.setAttribute('text', 'color: grey')
        });
    }
})

AFRAME.registerComponent('selected-work-link', {
    init: function () {
        this.el.addEventListener('click', function (evt) {
            window.open('https://' + evt.target.components.text.data.value);
        });
        this.el.addEventListener('mouseenter', function (evt) {
            this.setAttribute('text', 'color: #0077cc')
        });
        this.el.addEventListener('mouseleave', function (evt) {
            this.setAttribute('text', 'color: grey')
        });
    }
})

AFRAME.registerComponent('countdown', {
    init: function () {
        this.el.addEventListener('mouseenter', function (evt) {
            if (this.getAttribute('can-countdown') == "true") {
                var timeLeft = 3;
                downloadTimer = setInterval(function () {
                    timeLeft--;
                    document.getElementById('countdown').setAttribute('text', { value: timeLeft });
                    if (timeLeft <= 0) {
                        document.getElementById('countdown').setAttribute('text', { value: '' });
                        clearInterval(downloadTimer);
                    }
                }, 480);

                document.getElementById('countdown').setAttribute('visible', 'true');
                document.getElementById('countdown').setAttribute('animation', 'property: scale; easing: easeInCubic; dur: 1500; from: 5 5 5; to: 3 3 3');
                document.getElementById('cursor').setAttribute('animation__fusing', 'property: scale; startEvents: fusing; easing: easeInCubic; dur: 1500; from: 0.15 0.15 0.15; to: 0.1 0.1 0.1');
            }
        });
        this.el.addEventListener('mouseleave', function (evt) {
            clearInterval(downloadTimer)
            document.getElementById('countdown').removeAttribute('animation')
            document.getElementById('countdown').setAttribute('text', { value: 3 });
            document.getElementById('countdown').setAttribute('visible', 'false');
            document.getElementById('countdown').setAttribute('scale', '5 5 5');
            document.getElementById('cursor').removeAttribute('animation__fusing');
            document.getElementById('cursor').setAttribute('scale', '0.15 0.15 0.15');
        });
    }
});