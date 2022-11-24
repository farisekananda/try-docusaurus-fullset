package main

import (
	"fmt"
	"net/http"
	"strings"
	"time"
)

func main() {
	srv := &http.Server{
		Addr:        ":80",
		Handler:     router(),
		IdleTimeout: time.Minute,
	}

	srv.ListenAndServe()
}

func router() http.Handler {
	mux := http.NewServeMux()

	// index
	mux.HandleFunc("/", indexHandler)

	// static files
	httpFS := http.FileServer(http.Dir("build"))
	mux.Handle("/assets/", httpFS)
	mux.Handle("/img/", httpFS)

	// api
	mux.HandleFunc("/api/v1/greeting", greetingAPI)
	return mux
}

func indexHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet {
		w.WriteHeader(http.StatusMethodNotAllowed)
		fmt.Fprintln(w, http.StatusText(http.StatusMethodNotAllowed))
		return
	}

	if strings.HasPrefix(r.URL.Path, "/api") {
		http.NotFound(w, r)
		return
	}

	if r.URL.Path == "/favicon.ico" {
		http.ServeFile(w, r, "build/favicon.ico")
		return
	}

	http.ServeFile(w, r, "build/index.html")
}

func greetingAPI(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("Hello, there!"))
}
