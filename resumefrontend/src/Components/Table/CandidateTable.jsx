import axios from "axios";
import React from "react";
import Table from 'react-bootstrap/Table';

export const CandidateTable = () => {

  const handleCandi = async (id) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/get-candidate-details/?id=${id}`, {
        method: 'GET'
      })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Job Title</th>
          <th>Skills</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Arshdeep Singh</td>
          <td>arshdeep.workmail@gmail.com</td>
          <td>+91 8826782180</td>
          <td>Devops Engineer</td>
          <td>
            <div>
              "Chef",
              "Splunk",
              "Cloudformation",
              "Bash",
              "Puppet",
              "postgresql",
              "Jenkins",
              "DevOps",
              "terraform",
              "Networking",
              "Docker",
              "Ansible",
              "Prometheus",
              "Route",
              "c",
              "Travis",
              "Python",
              "Grafana",
              "DNS",
              "GCP",
              "CI/CD",
              "Testing",
              "Azure",
              "Gitlab",
              "rest",
              "Kubernetes",
              "MySQL",
              "Git",
              "Mongodb",
              "agile",
              "AWS"
            </div>
          </td>
        </tr>
        <tr>
          <td>2</td>
          <td>OLUMIDE JEGEDE</td>
          <td>jegede.olumide@gmail.com</td>
          <td>null</td>
          <td>Infrastructure Engineer</td>
          <td>
            <div>
              "Chef",
              "Cloudformation",
              "microsoft office",
              "Bash",
              "slack",
              "Maven",
              "programming languages",
              "Puppet",
              "Jenkins",
              "Apache",
              "json",
              "sonarqube",
              "DevOps",
              "IAAS",
              "programming",
              "paas",
              "vmware",
              "SaaS",
              "Networking",
              "virtualization",
              "ssl",
              "microsoft excel",
              "Linux",
              "c",
              "Ansible",
              "Prometheus",
              "Docker",
              "ubuntu",
              "Agile",
              "samba",
              "xml",
              "Python",
              "Grafana",
              "DNS",
              "GCP",
              "NGINX",
              "SQL",
              "CI/CD",
              "github",
              "Testing",
              "Azure",
              "Terraform",
              "groovy",
              "Kubernetes",
              "bitbucket",
              "Putty",
              "YAML",
              "MySQL",
              "Git",
              "Oracle",
              "Java",
              "PostgreSQL",
              "Mongodb",
              "JIRA",
              "AWS"
            </div>
          </td>
        </tr>
        <tr>
          <td> 6679657ca86cf427afdf74f0 </td>
          <td onClick={() => handleCandi('6679657ca86cf427afdf74f0')}>Meenakshi Chhipa</td>
          <td>meenakshi.chhipa1995@gmail.com</td>
          <td>meenakshi.chhipa1995@gmail.com</td>
          <td>Devops Engineer</td>
          <td>
            <div>
              "Chef",
              "Splunk",
              "Cloudformation",
              "Jenkins",
              "Bitbucket",
              "DevOps",
              "programming",
              "zabbix",
              "terraform",
              "AI",
              "Linux",
              "Docker",
              "Ansible",
              "Prometheus",
              "Node",
              "ubuntu",
              "Python",
              "Grafana",
              "GCP",
              "CI/CD",
              "github",
              "Testing",
              "Azure",
              "Kubernetes",
              "YAML",
              "Git",
              "JIRA",
              "AWS"
            </div>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};
