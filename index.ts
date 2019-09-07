import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";

// ネットワークの作成 
const network = new gcp.compute.Network("network");
const computeFirewall = new gcp.compute.Firewall("firewall", {
    network: network.id,
    allows: [{
        protocol: "tcp",
        ports: [ "22" ],
    }],
});

//インスタンスの作成
const computeInstance = new gcp.compute.Instance("instance", {
    machineType: "f1-micro",
    zone: "us-central1-a",
    bootDisk: { initializeParams: { image: "debian-cloud/debian-9" } },
    networkInterfaces: [{
        network: network.id,
        accessConfigs: [{}], 
    }],
});

exports.instanceName = computeInstance.name;
exports.instanceIP = computeInstance.networkInterfaces.apply((ni: any) => ni[0].accessConfigs[0].natIp);
