import React from "react";
import { Switch } from "react-router";

import NotFound from "./components/NotFound";
import ProtectedRoute from "./containers/ProtectedRoute";
import NoAuthRoute from "./containers/NoAuthRoute";
import App from "./containers/App";

import { Home } from "./pages/Home";
import { Prontuario } from "./pages/Prontuario";
import { SpecialtyList } from "./pages/Specialty";
import { DoctorList, DoctorForm } from "./pages/Doctors";
import { PacientList, PacientForm } from "./pages/Pacient";
import { ExamList, ExamForm } from "./pages/Exams";
import { AppointmentList, AppointmentForm } from "./pages/Appointments";
import { SurgeryList, SurgeryForm } from "./pages/Surgeries";
import { LoginPage } from "./pages/Login";
import { AppointmentTypeList } from "./pages/AppointmentTypes";
import { ExamTypeList } from "./pages/ExamTypes";
import { ListRoles, RoleForm } from "./pages/Roles";
import { PanelLayout, PageLayout } from "./containers/layouts";
import { SurgeryTypeList } from "./pages/SurgeryTypes";

export default () => (
  <App>
    <Switch>
      <PageLayout exact path="/login" component={LoginPage} />
      <PanelLayout exact path="/" component={Home} />
      <PanelLayout exact path="/prontuarios" component={Prontuario} />

      <PanelLayout
        exact
        path="/configuracoes/tipo-atendimento"
        component={AppointmentTypeList}
      />
      <PanelLayout
        exact
        path="/configuracoes/tipo-exame"
        component={ExamTypeList}
      />
      <PanelLayout
        exact
        path="/configuracoes/tipo-cirurgia"
        component={SurgeryTypeList}
      />
      <PanelLayout
        exact
        path="/configuracoes/especialidade"
        component={SpecialtyList}
      />
      <PanelLayout exact path="/usuarios/medicos" component={DoctorList} />
      <PanelLayout exact path="/usuarios/medicos/novo" component={DoctorForm} />
      <PanelLayout exact path="/usuarios/pacientes" component={PacientList} />
      <PanelLayout
        exact
        path="/usuarios/pacientes/novo"
        component={PacientForm}
      />
      <PanelLayout exact path="/marcacoes/exames" component={ExamList} />
      <PanelLayout exact path="/marcacoes/exames/novo" component={ExamForm} />
      <PanelLayout
        exact
        path="/marcacoes/consultas"
        component={AppointmentList}
      />
      <PanelLayout
        exact
        path="/marcacoes/consultas/novo"
        component={AppointmentForm}
      />
      <PanelLayout exact path="/marcacoes/cirurgias" component={SurgeryList} />
      <PanelLayout
        exact
        path="/marcacoes/cirurgias/novo"
        component={SurgeryForm}
      />
      <PanelLayout
        exact
        path="/configuracoes/perfis-acesso"
        component={ListRoles}
      />
      <PanelLayout
        exact
        path="/configuracoes/perfis-acesso/novo"
        component={RoleForm}
      />
      <PanelLayout component={NotFound} />
    </Switch>
  </App>
);
