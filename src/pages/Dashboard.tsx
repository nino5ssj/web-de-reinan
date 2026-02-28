import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { LogOut } from "lucide-react";

interface Submission {
  id: string;
  name: string;
  email: string;
  event_type: string;
  date: string | null;
  message: string;
  created_at: string;
}

const Dashboard = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate("/login");
        return;
      }
      fetchSubmissions();
    };
    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) navigate("/login");
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const fetchSubmissions = async () => {
    const { data, error } = await supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error && data) setSubmissions(data);
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  const eventTypeLabels: Record<string, string> = {
    boda: "Boda",
    bautizo: "Bautizo",
    "quinceañera": "Quinceañera",
    "cumpleaños": "Cumpleaños",
    corporativo: "Evento Corporativo",
    sesion: "Sesión Personal",
    otro: "Otro",
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-secondary">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="font-display text-xl text-foreground">Reinán Chile</a>
          <div className="flex items-center gap-6">
            <h1 className="text-foreground text-sm uppercase tracking-wider hidden sm:block">Panel de Consultas</h1>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm"
            >
              <LogOut size={16} />
              Salir
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        {loading ? (
          <p className="text-muted-foreground text-center">Cargando...</p>
        ) : submissions.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg font-light">No hay consultas aún.</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {submissions.map((s) => (
              <div key={s.id} className="bg-card border border-border p-6 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-foreground font-medium">{s.name}</h3>
                  <span className="text-muted-foreground text-xs">
                    {new Date(s.created_at).toLocaleDateString("es-CU", {
                      day: "numeric", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit"
                    })}
                  </span>
                </div>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span>{s.email}</span>
                  <span className="text-foreground/70">{eventTypeLabels[s.event_type] || s.event_type}</span>
                  {s.date && <span>Fecha: {s.date}</span>}
                </div>
                <p className="text-foreground/80 text-sm font-light leading-relaxed">{s.message}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
