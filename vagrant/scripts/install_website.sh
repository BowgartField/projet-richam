# Install website
cd /home/vagrant/projet-richam/website
yarn
yarn build

cat <<EOF > /etc/systemd/system/nodejs-app.service
[Unit]
Description=Node js APP

[Service]
User=root
WorkingDirectory=/home/vagrant/projet-richam/website/
ExecStart=/usr/bin/yarn start
Restart=always

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl start nodejs-app
