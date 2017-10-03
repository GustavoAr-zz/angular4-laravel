# -*- mode: ruby -*-
# vi: set ft=ruby :

# Config Github Settings
github_username     = "aasanchez"
github_repo         = "Vaprobash"
github_branch       = "master"
github_url          = "https://raw.githubusercontent.com/#{github_username}/#{github_repo}/#{github_branch}"
db_root_password    = "root"   # We'll assume user "root"
db_enable_remote    = "true"   # remote access enabled when true
db_name             = "nggallery" # Database Name
php_version         = "7.1" # Options: 5.6 | 7.0 | 7.1
composer_packages   = [ ]
public_folder       = "/vagrant/"
laravel_version         = "latest" # If you need a specific version of Laravel, set it here

Vagrant.configure("2") do |config|
  config.vm.box = "ubuntu/xenial64"

  config.vm.define "database" do |db|
    db.vm.hostname = "db.cursoangular"
    db.vm.network :private_network, ip: "192.169.1.10"
    db.ssh.forward_agent = true
    db.vm.synced_folder ".", "/vagrant"
    db.vm.provider :virtualbox do |vb|
      vb.name = "cursoangular.db"
      vb.customize ["modifyvm", :id, "--cpus", 1]
      vb.customize ["modifyvm", :id, "--memory", 1024]
      vb.customize ["guestproperty", "set", :id, "/VirtualBox/GuestAdd/VBoxService/--timesync-set-threshold", 10000]
    end
    db.vm.provision "shell", path: "#{github_url}/scripts/mysql.sh", args: [db_root_password, db_enable_remote, db_name]
  end

  config.vm.define "api" do |api|
    api.vm.hostname = "cursoangular.app"
    api.vm.network :private_network, ip: "192.169.1.11"
    api.ssh.forward_agent = true
    api.vm.synced_folder "cursoangular/", "/vagrant",
      id: "core",
      :nfs => true,
    :mount_options => ['nolock,vers=3,udp,noatime,actimeo=2,fsc']
    api.vm.provider :virtualbox do |vb|
      vb.name = "cursoangular.web"
      vb.customize ["modifyvm", :id, "--cpus", 1]
      vb.customize ["modifyvm", :id, "--memory", 1024]
      vb.customize ["guestproperty", "set", :id, "/VirtualBox/GuestAdd/VBoxService/--timesync-set-threshold", 10000]
    end
    api.vm.provision "shell", path: "#{github_url}/scripts/php.sh", args: ["UTC", php_version]
    api.vm.provision "shell", path: "#{github_url}/scripts/nginx.sh", args: ["192.169.1.11", public_folder, "cursoangular.app", github_url]
    api.vm.provision "shell", path: "#{github_url}/scripts/composer.sh", privileged: false, args: ["", composer_packages.join(" ")]
    api.vm.provision "shell", path: "#{github_url}/scripts/laravel.sh", privileged: false, args: ["192.169.1.11", public_folder, laravel_version]
    api.vm.provision "shell", inline: <<-SHELL
      cp /vagrant/.env.example /vagrant/.env
      cd /vagrant && php artisan key:generate
      cd /vagrant && php artisan migrate --force
      cd /vagrant && php artisan db:seed
    SHELL
  end

  config.vm.provision "shell", path: "#{github_url}/scripts/base.sh", args: [384, "UTC"]

end
